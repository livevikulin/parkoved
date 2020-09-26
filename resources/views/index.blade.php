<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Park System</title>
    <link rel="stylesheet" href="/html/style/style.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body data-barba="wrapper">
    <div class="load-container">
        <div class="loading-screen">
            <svg width="134" height="153" viewBox="0 0 134 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="67" cy="62" r="59" stroke="white" stroke-width="2"/>
                <circle cx="67" cy="62" r="48" stroke="white" stroke-width="2"/>
                <circle cx="66.5" cy="62.5" r="20.5" stroke="white" stroke-width="2"/>
                <rect width="2" height="82" transform="matrix(-0.969086 0.246723 0.246723 0.969086 69.4941 62.606)" fill="white"/>
                <rect x="64.5602" y="62.6829" width="2" height="82" transform="rotate(14.7554 64.5602 62.6829)" fill="white"/>
                <rect x="17" y="140" width="99" height="13" fill="white"/>
                <circle cx="67" cy="61" r="4" fill="white"/>
                <line x1="66" y1="61" x2="126" y2="61" stroke="white" stroke-width="2"/>
                <line x1="7" y1="61" x2="67" y2="61" stroke="white" stroke-width="2"/>
                <line x1="67" y1="61" x2="67" y2="121" stroke="white" stroke-width="2"/>
                <line x1="67" y1="2" x2="67" y2="62" stroke="white" stroke-width="2"/>
                <path class="svg-animation" d="M71.3594 44.7003L71.6951 46.5111L73.031 45.2435L92.3706 26.8922L80.8937 50.9561L80.101 52.6183L81.9268 52.378L108.359 48.899L84.9301 61.6212L83.3117 62.5L84.9301 63.3788L108.359 76.101L81.9268 72.622L80.101 72.3817L80.8937 74.0439L92.3706 98.1078L73.031 79.7565L71.6951 78.4889L71.3594 80.2997L66.5 106.514L61.6406 80.2997L61.3049 78.4889L59.969 79.7565L40.6294 98.1078L52.1063 74.0439L52.899 72.3817L51.0732 72.622L24.6405 76.101L48.0699 63.3788L49.6883 62.5L48.0699 61.6212L24.6405 48.899L51.0732 52.378L52.899 52.6183L52.1063 50.9561L40.6294 26.8922L59.969 45.2435L61.3049 46.5111L61.6406 44.7003L66.5 18.4864L71.3594 44.7003Z" stroke="white" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1534 94H21.4773C21.4773 94 18.501 91 14.8296 91C11.1581 91 8.18182 94 8.18182 94H10.3977L10.3977 101H9.28979V102H8.18182L11.5057 107H18.1534L21.4773 102H20.3693V101H19.1534V94ZM18.1534 101V94H14.8296H11.3977L11.3977 101H13.7216V102H15.9375V101H18.1534Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M114.847 94H112.523C112.523 94 115.499 91 119.17 91C122.842 91 125.818 94 125.818 94H123.602L123.602 101H124.71V102H125.818L122.494 107H115.847L112.523 102H113.631V101H114.847V94ZM115.847 101V94H119.17H122.602L122.602 101H120.278V102H118.062V101H115.847Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9716 64H13.2955C13.2955 64 10.3192 61 6.64773 61C2.97629 61 0 64 0 64H2.2159L2.2159 71H1.10796V72H0L3.32386 77H9.97159L13.2955 72H12.1875V71H10.9716V64ZM9.97159 71V64H6.64773H3.2159L3.2159 71H5.53978V72H7.75569V71H9.97159Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M123.028 64H120.705C120.705 64 123.681 61 127.352 61C131.024 61 134 64 134 64H131.784L131.784 71H132.892V72H134L130.676 77H124.028L120.705 72H121.812V71H123.028V64ZM124.028 71V64H127.352H130.784L130.784 71H128.46V72H126.244V71H124.028Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1534 34H21.4773C21.4773 34 18.501 31 14.8296 31C11.1581 31 8.18182 34 8.18182 34H10.3977L10.3977 41H9.28979V42H8.18182L11.5057 47H18.1534L21.4773 42H20.3693V41H19.1534V34ZM18.1534 41V34H14.8296H11.3977L11.3977 41H13.7216V42H15.9375V41H18.1534Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M114.847 34H112.523C112.523 34 115.499 31 119.17 31C122.842 31 125.818 34 125.818 34H123.602L123.602 41H124.71V42H125.818L122.494 47H115.847L112.523 42H113.631V41H114.847V34ZM115.847 41V34H119.17H122.602L122.602 41H120.278V42H118.062V41H115.847Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6762 9H45C45 9 42.0237 6 38.3523 6C34.6808 6 31.7046 9 31.7046 9H33.9205L33.9205 16H32.8125V17H31.7046L35.0284 22H41.6762L45 17H43.8921V16H42.6762V9ZM41.6762 16V9H38.3523H34.9205L34.9205 16H37.2443V17H39.4603V16H41.6762Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M91.3239 9H89C89 9 91.9763 6 95.6477 6C99.3192 6 102.295 9 102.295 9H100.08L100.08 16H101.188V17H102.295L98.9716 22H92.3239L89 17H90.108V16H91.3239V9ZM92.3239 16V9H95.6477H99.0796L99.0796 16H96.7557V17H94.5398V16H92.3239Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 3H74C74 3 70.866 0 67 0C63.134 0 60 3 60 3H62.3333L62.3333 10H61.1667V11H60L63.5 16H70.5L74 11H72.8333V10H71.5V3ZM70.5 10V3H67H63.3333L63.3333 10H65.8333V11H68.1667V10H70.5Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 124H74C74 124 70.866 121 67 121C63.134 121 60 124 60 124H62.3333L62.3333 131H61.1667V132H60L63.5 137H70.5L74 132H72.8333V131H71.5V124ZM70.5 131V124H67H63.3333L63.3333 131H65.8333V132H68.1667V131H70.5Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6307 116H42.9545C42.9545 116 39.9783 113 36.3068 113C32.6354 113 29.6591 116 29.6591 116H31.875L31.875 123H30.7671V124H29.6591L32.983 129H39.6307L42.9545 124H41.8466V123H40.6307V116ZM39.6307 123V116H36.3068H32.875L32.875 123H35.1989V124H37.4148V123H39.6307Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M93.3693 116H91.0455C91.0455 116 94.0217 113 97.6932 113C101.365 113 104.341 116 104.341 116H102.125L102.125 123H103.233V124H104.341L101.017 129H94.3693L91.0455 124H92.1534V123H93.3693V116ZM94.3693 123V116H97.6932H101.125L101.125 123H98.8011V124H96.5852V123H94.3693Z" fill="white"/>
            </svg>
        </div>
    </div>
<div class="wrapper" data-barba="container">
    <header>
        <div class="container">
            <div class="header">
                <div class="burger">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="4" rx="2" fill="#802AD4"/>
                        <rect y="10" width="21.1892" height="4" rx="2" fill="#802AD4"/>
                        <rect y="20" width="12.8649" height="4" rx="2" fill="#802AD4"/>
                    </svg>
                </div>
                <div class="balance">
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="main" id="quest">
                <p class="main-subtitle animate-this">
                    Приглашаем принять участие в увлекательном квесте. Он проведет вас по самым интересным местам нашего
                    парка и поможет провести время максимально
                </p>
                <div class="main-picture animate-this">
                    <img src="/html/img/main-img.jpg" alt="">
                </div>
                @if(!empty($configs))
                    <div class="choice animate-this">
                        @foreach($configs as $config)
                            <div class="choice-box">
                                <span>{{ $config->name }}</span>
                                <select name="{{ $config->id }}" class="config">
                                    @foreach(explode(',', $config["fields"]) as $field)
                                        <option value="{{ $field }}">{{ $field }}</option>
                                    @endforeach
                                </select>
                            </div>
                        @endforeach
                    </div>
                @endif
                <a href="#" id="startQuest" class="btn animate-this">Начать</a>
            </div>
        </div>
    </main>
    <footer>
        <div class="container">
            <div class="footer-menu">
                <div class="footer-menu__item">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="9" r="2" fill="#C4C4C4"/>
                        <rect x="12" y="7" width="15" height="4" rx="2" fill="#C4C4C4"/>
                        <circle cx="7" cy="17" r="2" fill="#C4C4C4"/>
                        <rect x="12" y="15" width="15" height="4" rx="2" fill="#C4C4C4"/>
                        <circle cx="7" cy="25" r="2" fill="#C4C4C4"/>
                        <rect x="12" y="23" width="15" height="4" rx="2" fill="#C4C4C4"/>
                    </svg>
                </div>
                <div class="footer-menu__item active">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.8333" cy="11" r="4" stroke="white" stroke-width="2"/>
                        <line x1="15.7475" y1="14.3333" x2="25.1667" y2="23.7524" stroke="white" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="21.5" y1="21.4142" x2="20.4142" y2="22.5" stroke="white" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="24.3333" y1="23.4142" x2="22.4142" y2="25.3333" stroke="white" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="footer-menu__item">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 8.05C5 8.05 6 7 10 7C14 7 15 8.05 15 8.05V28C15 28 14 26 10 26C7.51851 26 6.19161 26.7697 5.54177 27.3541C5.38485 27.4953 5 27.3638 5 27.1528V8.05Z"
                            fill="#C4C4C4"/>
                        <path
                            d="M18 8.05C18 8.05 19 7 23 7C26.4607 7 27.6758 7.78597 27.9406 7.99789C27.9807 8.02999 28 8.07864 28 8.13V27.1528C28 27.3638 27.6151 27.4953 27.4582 27.3541C26.8084 26.7697 25.4815 26 23 26C19 26 18 28 18 28V8.05Z"
                            fill="#C4C4C4"/>
                    </svg>
                </div>
                <div class="footer-menu__item">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 18.052C6 17.4997 6.44772 17.052 7 17.052H19C19.5523 17.052 20 17.4997 20 18.052V26.052C20 26.6043 19.5523 27.052 19 27.052H16.5H15.8667C15.3144 27.052 14.8667 26.6043 14.8667 26.052V22.5065H11.25V26.052C11.25 26.6043 10.8023 27.052 10.25 27.052H9.5H7C6.44772 27.052 6 26.6043 6 26.052V18.052Z"
                            fill="#C4C4C4"/>
                        <path
                            d="M12.5212 9.31319C12.8196 9.15039 13.1804 9.15039 13.4789 9.31319L20.5572 13.1741C21.4667 13.6702 21.1143 15.052 20.0783 15.052H5.92166C4.88565 15.052 4.5333 13.6702 5.44281 13.1741L12.5212 9.31319Z"
                            fill="#C4C4C4"/>
                        <path
                            d="M23.6093 19.9436C26.7476 18.5195 28.1373 14.8209 26.7132 11.6825C25.289 8.54415 21.5904 7.15449 18.452 8.57861"
                            stroke="#C4C4C4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </footer>
</div>


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/@barba/core"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.0.8/es5-shim.min.js"></script>
<script src="/html/js/app.js"></script>
</body>
</html>
