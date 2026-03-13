(() => {
    window.addEventListener("load", async () => {
        const burger_btn = document.querySelector("#burger_btn")
        if (!burger_btn) throw new Error()

        const burger = document.querySelector(".burger")
        if (!burger) throw new Error()
        
        burger_btn.addEventListener("click", e => {
            burger.classList.toggle("show")
        })

        const ct = document.querySelector("#ct")
        if (!ct) throw new Error()

        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark");
        }

        ct.addEventListener("click", e => {
            document.body.classList.toggle("dark");
            
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });

        const modal = document.querySelector("#modal")
        if (!modal) return

        const modalContent = document.querySelector("#modalcontent")
        if (!modalContent) return

        const closeBtn = document.querySelector("#closebtn")
        if (!closeBtn) return

        const overlay = document.querySelector("#overlay")
        if (!overlay) return

        document.querySelectorAll(".readbtn").forEach(e => {
            e.addEventListener("click", () => {
                const parent = e.parentNode;

                modalContent.innerHTML = "";
                Array.from(parent.children).forEach(elem => {
                    if (elem.tagName !== "BUTTON") {
                        modalContent.appendChild(elem.cloneNode(true))
                    }
                });
                modal.classList.remove("hidden")
                overlay.classList.remove("hidden")
            })
        })

        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden")
            overlay.classList.add("hidden")
        })
    })
})()