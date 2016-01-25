function Cell ()
{
    this.value = "";
    this.view = null;
    this.formula = null;
}


Cell.prototype = {

    getValue : function () { return this.value; },

    setValue : function (v) {
        this.value = v;
        
    if (typeof this.view.notify == "function")
        this.view.notify(this);
	/* A COMPLETER */
    },

    getView : function () { return this.view; },
    setView : function (v) {  this.view = v },

    getFormula : function () {  this.formula },

    setFormula : function (s) {
        //var f = new Formula();
        var f = Formula.parse(s);
        this.formula = f;
        this.setValue(f.eval());
	/* A COMPLETER */
    },



}
