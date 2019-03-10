import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clip-viewer',
  templateUrl: './clip-viewer.component.html',
  styleUrls: ['./clip-viewer.component.css']
})
export class ClipViewerComponent implements OnInit {

  @Input() clipId: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  public getIFrameUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://clips.twitch.tv/embed?clip=' + this.clipId);
  }
}
