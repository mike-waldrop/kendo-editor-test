import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


declare var kendo: any;

@Component({
  selector: 'landstar-editor',
  templateUrl: './landstar-editor.component.html',
  styleUrls: ['./landstar-editor.component.css']
})
export class LandstarEditorComponent implements OnInit {

  @ViewChild('editor') editorEL: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var editor = kendo.jQuery(this.editorEL.nativeElement).kendoEditor({
      tools: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "justifyLeft",
        "justifyCenter",
        "justifyRight",
        "justifyFull",
        "insertUnorderedList",
        "insertOrderedList",
        "indent",
        "outdent",
        "createLink",
        "unlink",
        "insertImage",
        "insertFile",
        "subscript",
        "superscript",
        "tableWizard",
        "createTable",
        "addRowAbove",
        "addRowBelow",
        "addColumnLeft",
        "addColumnRight",
        "deleteRow",
        "deleteColumn",
        "viewHtml",
        "formatting",
        "cleanFormatting",
        "fontName",
        "fontSize",
        "foreColor",
        "backColor",
        "print"
      ],
      pasteCleanup: {
        all: false,
        css: false,
        keepNewLines: false,
        msAllFormatting: false,
        msConvertLists: true,
        msTags: true,
        none: false,
        span: false
      },
      stylesheets: [
        "base.css"
    ]
  });
    
    
  }

  ngOnDestroy(): void {
    kendo.destroy(this.editorEL.nativeElement);
  }

}
