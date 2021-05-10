

class NinjaProtect{

    config = {};

    constructor(config = {})
    {
        this.config = config;
    }
    //automatically protect for all
    protectAll(){
        this.config = {
            'disableRightClick' : true, 
            'disableSelect' : true, 
            'disableDrag' : true, 
    
           
            'disableDeveloperMode' : true, 
            'disableInspectElement' : true, 
            'disableCopy' : true,   
            'disableCut' : true, 
            'disablePrint' : true, 
            'disableSave' : true, 
    
            'disableSelectAll' : true,     
            'disableViewSource' : true,     
            }
        this.protect();

    }

    /**
     * Apply Rules based on given config
     */
    protect(){

        this.config.disableSelectAll        ? this.protectCombiCtrlKeys(65) : false;  //disable Ctrl A
        this.config.disableCopy             ? this.protectCombiCtrlKeys(67) : false;   //disable Ctrl C
        this.config.disableCut              ? this.protectCombiCtrlKeys(88) : false;   //disable Ctrl X
        this.config.disableViewSource       ? this.protectCombiCtrlKeys(85) : false;   //disable Ctrl U / view source
        this.config.disablePrint            ? this.protectCombiCtrlKeys(80) : false;   //disable Ctrl P / Print Page
        this.config.disableSave             ? this.protectCombiCtrlKeys(83) : false;   //disable Ctrl S / Print Page
        this.config.disableInspectElement   ? this.protectCombiCtrlShiftKeys(73) : false;   //disable Ctrl + Shift + i
        this.config.disableDeveloperMode    ? this.protectKeys(123) : false;   //disable F12

        this.config.disableRightClick       ? this.protectRightClick() : false;    //disable right clieck
        this.config.disableSelect           ? this.protectSelectElement() : false; //disable select element / text
        this.config.disableDrag             ? this.protectDragElement() : false;   //disable drag element

    }



    /**
     * disable user from selecting an element
     */
    protectSelectElement(){
        let e = document.body;
        if (typeof e.onselectstart != "undefined") e.onselectstart = function() {
            return false
        };
        else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
        else e.onmousedown = function() {
                return false
            };
        e.style.cursor = "default"

    }

    /**
     * disable drag element, e.g. drag images to new tab
     */
    protectDragElement(){
        document.ondragstart = function() {
            return false
        };
    }

    /**
     * disable right Click, but enable only if it is hyperlink
     */
    protectRightClick(){
        
        document.oncontextmenu = function(e) {
            //uncomment these lines if you want right click enabled for hyperlink. however, the 'inspect element' menu will also show
            // var t = e || window.event;
            // var n = t.target || t.srcElement;
            // if (n.nodeName != "A") return false
            return false;
        };
    }

    protectKeys(keynumber){
        return window.addEventListener("keydown", function(e) {

            if (e.key !== undefined || e.which !== undefined) {

                if (e.key == keynumber) {
                    e.preventDefault()

                   
                }
                else if (e.which == keynumber) {   //for older browser suport
                    e.preventDefault()
                }
            }
            
        });
    }

    protectCombiCtrlKeys(keynumber){
        return window.addEventListener("keydown", function(e) {

            if (e.key !== undefined || e.which !== undefined) {

                if (e.ctrlKey && e.key == keynumber) {
                    e.preventDefault()

                   
                }
                else if (e.ctrlKey && e.which == keynumber) {   //for older browser suport
                    e.preventDefault()
                }
            }
            
        });
    }

    protectCombiCtrlShiftKeys(keynumber){
        return window.addEventListener("keydown", function(e) {

            if (e.key !== undefined || e.which !== undefined) {

                if (e.ctrlKey && e.shiftKey && e.key == keynumber) {
                    e.preventDefault()

                   
                }
                else if (e.ctrlKey  && e.shiftKey && e.which == keynumber) {   //for older browser suport
                    e.preventDefault()
                }
            }
            
        });
    }


}   //end class

