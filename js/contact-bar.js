(function () {
    const linksData = [
        {
            to: 'https://telegram.me/Alina_Unger',
            label: 'Telegram',
            icon: 'telegram.png',
        },
        {
            to: 'https://vk.me/id183191798',
            label: 'Vkontakte',
            icon: 'vk.png',
        },
        {
            to: 'https://wa.me/89500180401',
            label: 'WhatsApp',
            icon: 'whatsapp.png',
        }
    ];

    const openIcon = `
        <svg viewBox="0 -256 1850 1850" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;">
            <path transform="matrix(0.71186441,0,0,-0.71186441,288.54237,1093.9482)"
                d="M 704,1152 Q 551,1152 418,1100 285,1048 206.5,959 128,870 128,768 q 0,-82 53,-158 53,-76 149,-132 l 97,-56 -35,-84 q 34,20 62,39 l 44,31 53,-10 q 78,-14 153,-14 153,0 286,52 133,52 211.5,141 78.5,89 78.5,191 0,102 -78.5,191 -78.5,89 -211.5,141 -133,52 -286,52 z m 0,128 q 191,0 353.5,-68.5 Q 1220,1143 1314,1025 1408,907 1408,768 1408,629 1314,511 1220,393 1057.5,324.5 895,256 704,256 618,256 528,272 404,184 250,144 214,135 164,128 h -3 q -11,0 -20.5,8 -9.5,8 -11.5,21 -1,3 -1,6.5 0,3.5 0.5,6.5 0.5,3 2,6 l 2.5,5 q 0,0 3.5,5.5 3.5,5.5 4,5 0.5,-0.5 4.5,5 4,5.5 4,4.5 5,6 23,25 18,19 26,29.5 8,10.5 22.5,29 Q 235,303 245.5,323 256,343 266,367 142,439 71,544 0,649 0,768 0,907 94,1025 188,1143 350.5,1211.5 513,1280 704,1280 Z M 1526,111 q 10,-24 20.5,-44 10.5,-20 25,-38.5 14.5,-18.5 22.5,-29 8,-10.5 26,-29.5 18,-19 23,-25 1,-1 4,-4.5 3,-3.5 4.5,-5 1.5,-1.5 4,-5 2.5,-3.5 3.5,-5.5 l 2.5,-5 q 0,0 2,-6 2,-6 0.5,-6.5 -1.5,-0.5 -1,-6.5 -3,-14 -13,-22 -10,-8 -22,-7 -50,7 -86,16 Q 1388,-72 1264,16 1174,0 1088,0 817,0 616,132 q 58,-4 88,-4 161,0 309,45 148,45 264,129 125,92 192,212 67,120 67,254 0,77 -23,152 129,-71 204,-178 75,-107 75,-230 0,-120 -71,-224.5 Q 1650,183 1526,111 Z">
            </path>
        </svg>
    `;

    const closeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-9 -9 41 41"
            style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;">
            <path
                d=" M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
            </path>
        </svg>
    `;

    window.addEventListener('DOMContentLoaded', handleLoad);

    function handleLoad() {
        const contactBar = document.querySelector('.contact-bar');
        const links = createLinks();

        const toggleButton = document.querySelector('.contact-bar__toggle-btn');
        const iconWrap = document.querySelector('.contact-bar__icon-wrap');
        let timeout = null;
        let isHide = true;

        toggleButton.addEventListener('click', handleToggleClick);

        function handleToggleClick() {
            if (!isHide) {
                return;
            }

            if (iconWrap.classList.contains('contact-bar__icon-wrap--open')) {
                iconWrap.classList.remove('contact-bar__icon-wrap--open');
                iconWrap.classList.add('contact-bar__icon-wrap--close');
                iconWrap.innerHTML = closeIcon;
                toggleOpenLinks(true);
            } else {
                clearTimeout(timeout);
                iconWrap.classList.add('contact-bar__icon-wrap--open');
                iconWrap.classList.remove('contact-bar__icon-wrap--close');
                iconWrap.innerHTML = openIcon;
                toggleOpenLinks(false);
            }

        } // 42

        function toggleOpenLinks(isOpen) {
            if (isOpen) {
                contactBar.prepend(links);
            } else {
                links.classList.add('hide');
                isHide = false;
                timeout = setTimeout(() => {
                    isHide = true;
                    links.classList.remove('hide');
                    links.remove();
                }, 300);
            }
        }

        function createLinks() {
            const html = linksData.map(({ icon, label, to }) => `
                <div class="contact-bar__link-wrap">
                    <div class="contact-bar__tooltip">${label}</div>
                    <a href="${to}" target="_blank" class="contact-bar__link">
                        <img src="./images/icons/${icon}" class="contact-bar__link-image" />
                    </a>
                </div>
            `).join('');

            const links = document.createElement('div');
            links.classList.add('contact-bar__links');
            links.innerHTML = html;
            return links;
        }
    }
}());