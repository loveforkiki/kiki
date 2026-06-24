/* =========================
   SPLASH SCREEN
========================= */

window.addEventListener("load", () => {

    const splash =
    document.getElementById(
        "splash-screen"
    );

    const app =
    document.getElementById(
        "app"
    );

    setTimeout(() => {

        splash.style.opacity = "0";

        setTimeout(() => {

            splash.style.display =
            "none";

            app.style.display =
            "block";

        },300);

    },700);

});


/* =========================
   LIKE BUTTON
========================= */

document
.querySelectorAll(".like-btn")
.forEach(btn => {

    btn.addEventListener(
    "click",
    () => {

        btn.classList.toggle(
            "liked"
        );

        if(
        btn.classList.contains(
            "liked"
        )
        ){

            btn.classList.remove(
                "fa-regular"
            );

            btn.classList.add(
                "fa-solid"
            );

        }else{

            btn.classList.remove(
                "fa-solid"
            );

            btn.classList.add(
                "fa-regular"
            );

        }

    });

});


/* =========================
   LOVE NOTE MODAL
========================= */

const loveModal =
document.getElementById(
"loveModal"
);

const closeModal =
document.getElementById(
"closeModal"
);

document
.querySelectorAll(
".more-btn"
)
.forEach(btn => {

    btn.addEventListener(
    "click",
    () => {

        loveModal.classList.add(
            "show"
        );

    });

});

closeModal.addEventListener(
"click",
() => {

    loveModal.classList.remove(
        "show"
    );

});

loveModal.addEventListener(
"click",
e => {

    if(
    e.target === loveModal
    ){

        loveModal.classList.remove(
            "show"
        );

    }

});


/* =========================
   STORY VIEWER
========================= */

const stories =
document.querySelectorAll(
".story"
);

const storyViewer =
document.getElementById(
"storyViewer"
);

const storyImage =
document.getElementById(
"storyImage"
);

const storyUsername =
document.getElementById(
"storyUsername"
);

const closeStory =
document.getElementById(
"closeStory"
);

stories.forEach(story => {

    story.addEventListener(
    "click",
    () => {

        storyImage.src =
        story.dataset.img;

        storyUsername.textContent =
        story.dataset.name;

        storyViewer.classList.add(
            "show"
        );

    });

});

closeStory.addEventListener(
"click",
() => {

    storyViewer.classList.remove(
        "show"
    );

});
const successPopup =
document.getElementById(
"commentSuccess"
);

document
.querySelectorAll(
".comment-btn"
)
.forEach(btn => {

    btn.addEventListener(
    "click",
    async () => {

        const input =
        btn.parentElement
        .querySelector(
            ".comment-input"
        );

        const comment =
        input.value.trim();

        if(!comment) return;

        btn.disabled = true;
        btn.innerText = "Sending...";

        try {

            const now =
            new Date();

            await fetch(
            "https://script.google.com/macros/s/AKfycbzzFn8-kAHPCJnjAuD1-jAkqFGU0-xwdlVMCCZJ0-Ebl2i3pm84A_zHLCVETN5k0qqr/exec",
            {
                method:"POST",

                mode:"no-cors",

                headers:{
                    "Content-Type":
                    "text/plain"
                },

                body:JSON.stringify({

                    comment:
                    comment,

                    date:
                    now.toLocaleDateString(),

                    time:
                    now.toLocaleTimeString()

                })

            });

            input.value = "";

            successPopup
            .classList
            .add("show");

            setTimeout(() => {

                successPopup
                .classList
                .remove("show");

            },1500);

        } catch(error){

            console.error(error);

            alert(
            "Comment Send Failed"
            );

        }

        btn.disabled = false;
        btn.innerText = "Send";

    });

});