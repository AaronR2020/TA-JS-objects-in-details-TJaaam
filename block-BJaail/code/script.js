window.onload=function(){
class Book{
    constructor(title,author,id){
        this.title=title;
        this.author=author;
        this.id=id;
    }
}

class UI{
    static createUI(book){
        const root=document.querySelector(".add-books");

        const tr=document.createElement("tr");

        const title=document.createElement(`td`);
        title.innerText=`${book.title} `;
        
        const author=document.createElement(`td`);
        author.innerText=`${book.author}`;

        const id=document.createElement(`td`);
        id.innerText=`${book.id}`; 

        const cls = ["far", "fa-times-circle"]
         const blank=document.createElement(`td`);
         blank.classList.add(...cls);
         blank.addEventListener("click",function(e){
            e.target.parentElement.remove()
            })
        
        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(id); 
         tr.appendChild(blank);

        root.appendChild(tr);
    }
    static clearAll(){
        document.querySelector("#title").value="";
        document.querySelector("#author").value="";
        document.querySelector("#isbn").value="";
    }
}

document.querySelector(".input-info").addEventListener('submit', function(e){
    e.preventDefault();
    title=document.querySelector("#title").value;
    author=document.querySelector("#author").value;
    id=document.querySelector("#isbn").value;
    if(title==""||author==""||id==""){
        alert("Enter missing values")
    }
    else{
        let book=new Book(title,author,id);
        UI.createUI(book)
        UI.clearAll();
    }
    
});

}