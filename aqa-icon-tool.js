import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<iron-iconset-svg name="aqa-tool" size="1024">
    <svg>
        <defs>
            <g id="bin">
                <path d="M217.6 972.8c0 25.6 25.6 51.2 51.2 51.2h480c25.6 0 51.2-19.2 51.2-51.2l32-723.2h-652.8l38.4 723.2zM620.8 428.8c0-12.8 6.4-19.2 19.2-19.2h32c12.8 0 19.2 6.4 19.2 19.2v416c0 12.8-6.4 19.2-19.2 19.2h-32c-12.8 0-19.2-6.4-19.2-19.2v-416zM473.6 428.8c0-12.8 6.4-19.2 19.2-19.2h32c12.8 0 19.2 6.4 19.2 19.2v416c0 12.8-6.4 19.2-19.2 19.2h-32c-12.8 0-19.2-6.4-19.2-19.2v-416zM326.4 428.8c0-12.8 6.4-19.2 19.2-19.2h32c12.8 0 19.2 6.4 19.2 19.2v416c0 12.8-6.4 19.2-19.2 19.2h-32c-12.8 0-19.2-6.4-19.2-19.2v-416z"></path>
                <path d="M864 51.2h-224v-44.8c0-6.4-6.4-12.8-12.8-12.8h-230.4c-6.4 0-12.8 6.4-12.8 12.8v44.8h-224c-19.2 0-32 12.8-32 32v102.4h761.6v-102.4c6.4-12.8-12.8-32-25.6-32z"></path>
            </g>
        </defs>
    </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
