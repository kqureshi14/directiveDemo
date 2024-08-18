import { Directive,ElementRef, Host, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appManageHtml]',
  standalone: true
})
export class ManageHtmlDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    el.nativeElement.style.color = "red";
 
   }

   @HostListener('mouseenter') onMouseEvent(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
   }


   @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','transparent');
   }

   @HostListener('click') onClick(){
    this.renderer.setProperty(this.el.nativeElement,'value','CodeWithKaleem');
   }



}
