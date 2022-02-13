document.getElementById("getData").addEventListener("click", getdata)
function getdata (){
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        .then(res =>{
            console.log(res);
            return res.json();
        })
        .then(data =>{
            console.log(data);
            var bodyhtml = document.body;
            data.forEach(item =>{

                let div = document.createElement("div");
                div.setAttribute("class","container")
                bodyhtml.append(div);
                

                let row = document.createElement("div");
                row.setAttribute("class","row")
                div.append(row);

                let col1 = document.createElement("div");
                col1.setAttribute("class","col-4")
                row.append(col1);

                let col2 = document.createElement("div");
                col2.setAttribute("class","col-2")
                row.append(col2);

                let col3 = document.createElement("div");
                col3.setAttribute("class","col-6")
                row.append(col3);
                
                let ul = document.createElement("ul");
                ul.setAttribute("id","ul");
                col3.append(ul);

                let li = document.createElement("li");
                li.innerHTML = item.brand;
                ul.append(li);

                let p =document.createElement("p");
                p.innerHTML = "$ " + item.price;
                col1.append(p);
            })
            
        })
        .catch(err=>console.error(err))
}