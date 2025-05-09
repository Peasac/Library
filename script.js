const myLibrary = []

function Book(name, author, pages, status){
    this.name = name,
    this.author = author
    this.pages =  pages,
    this.status = status,
    this.ID = self.crypto.randomUUID()
    
}

function addBookToLibrary(name, author,pages, status){
    myLibrary.push( new Book(name,author,pages,status));

}
const carddiv = document.querySelector(".storage");
const bookname = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const satus = document.querySelectorAll(".status");
const create = document.querySelector(".submit-button");
var statusCheck ="";
create.addEventListener('click',(event)=>{
    const form = document.querySelector("form");
    if(!form.reportValidity()){
        return;
    }
   event.preventDefault();
    
    satus.forEach((setus)=>{
        if(setus.checked){
            lol = setus.value;
        }
        else unchecked = setus.value;
    })
    addBookToLibrary(bookname.value,author.value,pages.value,lol);
    display();
    dialog.close();
    form.reset();
    
}) 

function display(){
    carddiv.innerHTML="";
    myLibrary.forEach((object)=>{
    carddiv.innerHTML += 
    `
    <div class="card" id="${object.ID}">
        <div class="card-text">
        <p>Name: ${object.name}</p>
        <p>Author: ${object.author}</p>
        <p>Pages: ${object.pages}</p>
        </div>
        <div>
        <button class="Delete"><img src="/assets/trash-can-solid.svg" height="20px" width="10px"></button>
        <button class="read-status" style="${(object.status=="Read")?"background-color:green":"background-color:red"}" data-id="${object.ID}"> Status: ${(object.status=="Read")?"Read":"Not Read"}</button
        </div>
        </div `;
        
        changeStatus();
        deleteCard();
        
    });
    
}


const dialog = document.querySelector("dialog");
const add = document.querySelector(".Addbook");
add.addEventListener("click", ()=>{
    dialog.showModal();
})
const cancel = document.querySelector(".Cancel");
cancel.addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.close();
})
function changeStatus(){
const reads = document.querySelectorAll(".read-status");
reads.forEach((read)=>{
        read.addEventListener("click",()=>{
            const card =event.target.closest(".card");
            myLibrary.forEach((object)=>{
                if(card.id == object.ID){
                    object.status=object.status=="Read"?"Not Read":"Read";
                    display();
                }
        })
        })
});
}


function deleteCard(){
    const del = document.querySelectorAll(".Delete");
    del.forEach((d)=>{
        d.addEventListener("click",(event)=>{
            const card =event.target.closest(".card");
                    const index = myLibrary.findIndex(a => a.ID === card.id);
                    if(index!==-1) myLibrary.splice(index,1)
                    display();
        })

    })
}
