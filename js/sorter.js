$( "#sortable2" ).sortable({
            placeholder: "sortable-placeholder",
            connectWith: "#sortable",
        });
        $( "#sortable" ).sortable({
            placeholder: "sortable-placeholder",
            connectWith: "#sortable2",
        });
        $("button").click(function(){
            location.reload(true);
        });