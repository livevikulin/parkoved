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
    <div class="loading-screen"></div>
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
