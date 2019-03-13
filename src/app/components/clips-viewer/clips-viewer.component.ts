import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clips-viewer',
  templateUrl: './clips-viewer.component.html',
  styleUrls: ['./clips-viewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ClipViewerComponent implements OnInit {

  @Input() clipId: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  public getIFrameUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://clips.twitch.tv/embed?clip=' + this.clipId);
  }
}
