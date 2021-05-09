var ninjaprotect = {};

class NinjaProtect{

    config = {};

    constructor(config = {
        'disableRightClick' : true, 
        'disableSelect' : true, 
        'disablePageSource' : true, 
        'disableDeveloperMode' : true, 
        'disableInspectElement' : true, 
        'disableCopy' : true,   
        'disablePaste' : true, 
        'disablePrint' : true, 
        'disableSelectAll' : true,     
        })
    {
        this.config = config;

    }

    protectAll(){
        if(this.config.disableSelect) { this.disableSelectAll()};

        if(this.config.disableCopy) {this.disableCopy()};

        console.log("saya protecting ya");
        console.log(this.config);

    }



    disableCopy(){
        this.disableCombiCtrlKeys(67);
        console.log("disabling copy");
    }

    disableSelectAll(){
        this.disableCombiCtrlKeys(65);
    }


    
    disableCombiCtrlKeys(keynumber){
        window.addEventListener("keydown", function(e) {

            if (e.key !== undefined || e.which !== undefined) {

                if (e.ctrlKey && e.key == keynumber) {
                    e.preventDefault()

                   
                }
                else if (e.ctrlKey && e.which == keynumber) {   //for older browser suport
                    e.preventDefault()
                }
            }

            console.log("saya dipanggil")
            
        });



    }




}

