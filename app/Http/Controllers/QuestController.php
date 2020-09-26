<?php

namespace App\Http\Controllers;

use App\Models\AttrConfig;
use App\Models\Board;
use App\Models\Config;
use App\Models\Hold;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

ini_set('date.timezone', 'Asia/Novosibirsk');

class QuestController extends Controller
{
    public function __construct()
    {

    }

    public function show(Request $request)
    {
        for ($i = 1; $i <= 10; $i++) {
            $board = new Board();
            $board->create(
                [
                    'id_user' => $i,
                    'id_attr' => 5,
                    'date' => date('Y-m-d H:i:s')
                ]
            );
        }
        for ($i = 1; $i <= 8; $i++) {
            $board = new Board();
            $board->create(
                [
                    'id_user' => $i,
                    'id_attr' => 4,
                    'date' => date('Y-m-d H:i:s')
                ]
            );
        }

        $selectConfigs = Config::select([
            'id',
            'name',
            'fields' => AttrConfig::selectRaw('GROUP_CONCAT(distinct value)')->whereColumn('id_conf', 'p_config.id')
        ])->get();

        return view('index', ["configs" => $selectConfigs]);
    }

    public function getCard(Request $request)
    {
        $cards = $request->input('cards');
        $is_attr_id = empty($cards) ? 0 : $cards[count($cards)-1];
        $exclude_attr_ids = empty($cards) ? 0 : implode(',', $request->input('cards'));
        $conf_arr = $request->input('conf');/*[
            ["id" => 1, "value" => 120],
            ["id" => 2, "value" => 16]
        ];*/

        $next_card = DB::select('
        select
        p_attr.id, name, text, timing, parcoin, p_diff.diff, (select timing from p_local where (id_attr1 = ' . $is_attr_id . ' and id_attr2=p_attr.id) or (id_attr2 = ' . $is_attr_id . ' and id_attr1=p_attr.id) ) + (case when max(date) then timing - (UNIX_TIMESTAMP( now() ) - UNIX_TIMESTAMP( max(date) ))/60 else 0 end) + (case when counts then (counts div hold) * timing else 0 end) minStart from p_attr left join p_board on p_board.id_attr = p_attr.id left join p_hold on p_hold.id_attr = p_attr.id join p_diff on p_diff.id=p_attr.diff
        where p_attr.id not in (' . $exclude_attr_ids . ') and (select count(id) from p_attr_config where id_attr=p_attr.id and ( (id_conf=' . $conf_arr[0]["id"] . ' and value>=' . $conf_arr[0]["value"] . ') or (id_conf=' . $conf_arr[1]["id"] . ' and value>=' . $conf_arr[1]["value"] . ' ) ) ) = 0
        group by p_board.id_attr, p_attr.id, counts, timing, hold
        having (timing - (UNIX_TIMESTAMP( now() ) - UNIX_TIMESTAMP( max(date)))/60) >=0 or max(date) is NULL
        order by minStart asc
        limit 0,1
        ');
        if (!empty($next_card[0])) {
            return response()->json(["success" => true, "next_card" => $next_card[0]]);
        } else {
            return response()->json(["success" => false]);
        }
    }

    public function saveCard(Request $request)
    {
        if (!empty($request->input('attr'))) {
            $board = new Board();
            $board->create(
                [
                    'id_user' => 999,
                    'id_attr' => $request->input('attr'),
                    'date' => date('Y-m-d H:i:s')
                ]
            );
            $hold = new Hold();
            $isHold = $hold->where([
                'id_attr' => $request->input('attr'),
            ])->first();
            if (!empty($isHold)) {
                $isHold->counts = $isHold->counts - 1;
                $isHold->save();
            }
            return response()->json(["success" => true]);
        } else {
            return response()->json(["success" => false]);
        }
    }
}