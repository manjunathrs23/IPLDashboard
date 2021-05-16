import { Component, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Match } from "../shared/model/match";


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './match.details.content.component.html' 
})
export class NgbdModalContent {
  @Input() matchDetails: Match;

  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'match-details-component',
  templateUrl: './match.details.component.html'
})
export class MatchDetailsComponent {
  @Input() matchDetails: Match;

  ngOnInit() {
    console.log("asdfasdfsf   " + JSON.stringify(this.matchDetails))
  }

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent, { size: 'xl', backdrop: 'static' });
    modalRef.componentInstance.matchDetails = this.matchDetails;
  }
}