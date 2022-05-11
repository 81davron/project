

$("button").on("click", function(){
    $.ajax(`${movies}`,{
        success:function (response) {
            chiqarish(response)
        },
    })
})

function chiqarish(yangiliklar){
    yangiliklar.map(item =>{
        let colCard = `
        <div class="col-4">
            <div class="card">
                <a href="${item.url}">${item.title}</a>
                <p>${item.description}</p>
        </div>
            </div>
        
        `
        $(".container .row").append(colCard)
    })

}