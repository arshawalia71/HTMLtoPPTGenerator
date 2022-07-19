function makePPT(){
    var arr_new= new Array();
    arr_new[1] = ["ssd" , "56", "435", "454" , "345" ,"454","34","56","5633","456"];
    arr_new[0]=["Customer Name","Transaction Number","Time/Enrollment Saving","Increased Transactions","Time/Enrollment($)","Customer Experience Value","Compliance Efficiency","Legal Efficiency","Sustainbility Savings","Total Savings"];



        let pptx = new PptxGenJS();
        let slide = pptx.addSlide();
      
       
        slide.addImage({ path: "img.png",  w: 10 , h:5.5});

        slide.addText("TFI", { x: 3, y: 1, fontFace: "Arial", fontSize: 18, color: "#FF0000", bold: true, italic: false, underline: false });

        slide.addText("Sustainability", { x: 1.2, y: 2.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText("Savings Hours", { x: 4.5, y: 2.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText("Savings Dollars", { x: 7.8, y: 2.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       

        slide.addText("Inc Transactions", { x: 1.2, y: 3.8, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText("Customer Exp", { x: 4.4, y: 3.8, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText("Compliance ", { x: 7.7, y: 3.8, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        
      
        pptx.writeFile({ fileName: 'table2slides.pptx' });
}