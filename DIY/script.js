const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("ul");

/* =========================
   ADD TASK FUNCTION
========================= */

function addTask(){

    const taskText = input.value.trim();

    /* Prevent empty task */

    if(taskText === ""){

        input.classList.add("shake");

        setTimeout(() => {
            input.classList.remove("shake");
        }, 500);

        return;
    }

    /* Create task item */

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

         <div class="task-actions">
            <button class="complete-btn">✓</button>
             <button class="delete-btn">✕</button>
         </div>

    `;

    /* Smooth entry animation */

    li.style.opacity = "0";
    li.style.transform = "translateY(30px) scale(0.9)";

    taskList.prepend(li);

    requestAnimationFrame(() => {

        li.style.transition =
            "all 0.45s cubic-bezier(.2,.8,.2,1)";

        li.style.opacity = "1";
        li.style.transform =
            "translateY(0) scale(1)";
    });

   
/* COMPLETE TASK */

    const completeBtn =
        li.querySelector(".complete-btn");

    completeBtn.addEventListener("click", () => {

        li.classList.toggle("completed");

        li.style.animation =
            "completePop 0.4s ease";
    });




    /* DELETE TASK */

    const deleteBtn =
        li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        li.style.transition =
            "all 0.35s ease";

        li.style.opacity = "0";
        li.style.transform =
            "translateX(80px) scale(0.8)";

        setTimeout(() => {
            li.remove();
        }, 350);
    });


    
    

    /* Clear input */

    input.value = "";

    /* Focus back */

    input.focus();
}

/* =========================
   BUTTON CLICK
========================= */

button.addEventListener("click", addTask);

/* =========================
   ENTER KEY SUPPORT
========================= */

input.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        addTask();
    }
});

/* =========================
   INPUT GLOW EFFECT
========================= */

input.addEventListener("focus", () => {
    document.querySelector(".container")
        .classList.add("focus-mode");
});

input.addEventListener("blur", () => {
    document.querySelector(".container")
        .classList.remove("focus-mode");
});