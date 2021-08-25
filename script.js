    let inp =$("#inp");
    let deleteIcon = $("#delete")
    let count =0;
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    dats = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day = dats[date.getDay()];
    hour = hour < 10 ? "0"+hour:hour;
    min = min < 10 ? "0"+min:min;


$(() => {
    $("#addTask").click(() => {
        const div = $("<div></div>");
        div.addClass("todo");
        let text = inp.val();
            
        div.html(`
            <p>${text}</p>
            <i id="deete" class="fas fa-trash-alt"></i>
            `)
            inp.val("")
            if(text == "") {
                inp.css({"border":"2px solid red"})            
            }else {
                $(".body").append(div);
                inp.css({"border":"none"})     
                count++;       
            }

            div.click(() => {
                div.remove();
            })
         
            
    })
})