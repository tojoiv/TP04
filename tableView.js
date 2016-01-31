var TableView = function (id, tableModel) {

    // Constructeur

    //Modèle
    this.model = tableModel;

    //Élément div contenant la table, le bouton et la zone de saisie.
    this.div = document.createElement("div");

    //On lui donne un id particulier pour pouvoir cibler précisément
    //ses sous-éléments dans la feuille de style tableStyle.css
    this.div.id = "spreadsheet-div";

    //Élément de la page où attacher la table
    var target = document.getElementById(id);
    if (target)
	target.appendChild(this.div);


    //Création de la zone de texte
    this.input = document.createElement("input");
    this.input.type = "text";
    this.div.appendChild(this.input);
   
    //Création du bouton
    this.button = document.createElement("button");
    this.button.innerHTML = "&#10003;";  //Le caractère 'check-mark'
    this.div.appendChild(this.button);

    //Création de la table vide
    this.table = document.createElement("table");
    this.div.appendChild(this.table);
};


TableView.prototype.createTable = function () {
    var model = this.model;
    var table = this.table;
    
    while(table.firstChild){
        table.removeChild(table.firstChild);
    };
    
    var thead = document.createElement("thead");
    table.appendChild(thead);
    
    var tr = document.createElement("tr");
    thead.appendChild(tr);
    
    var th = document.createElement("th");
    tr.appendChild(th);
    var identificateur = document.createTextNode("");
    th.appendChild(identificateur);
    
    model.forEachCol( function (colonne) {     
        var th = document.createElement("th");
        //var identificateur = document.createTextNode(colonne);
        //th.appendChild(identificateur);
        th.innerHTML = colonne;
        tr.appendChild(th);
    });
    
    
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
         
    model.forEachRow ( function (ligne){
        var tr = document.createElement("tr");
        tbody.appendChild(tr);        
        var td = document.createElement("td");
        tr.appendChild(td);
        var ident = document.createTextNode(ligne);
        td.appendChild(ident);
        
        model.forEachCol( function (colonne){
            var td = document.createElement("td");
            td.row = ligne ;
            td.col = colonne;
            td.notify = function (cell){
                var ident = document.createTextNode(cell.getValue());
                td.appendChild(ident);
            };
            td.isSelected = function (){
                td.getAttribute("class");
                if (td.getAttribute("class") === "selected"){
                    return true;
                }
                
                return false;
            };
            td.selected = function (b){
                if (b) td.setAttribute("class", "selected");
                else td.setAttribute("class");
            };
            
            
            tr.appendChild(td);
            var ident = document.createTextNode(model.getCell(colonne, ligne).getValue());
            td.appendChild(ident);
        });
    });
            
    

    /* A COMPLETER */




};
