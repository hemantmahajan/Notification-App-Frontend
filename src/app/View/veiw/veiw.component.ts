import { Component, OnInit } from '@angular/core';
import { elementStart } from '@angular/core/src/render3';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css']
})
export class VeiwComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private appService: AppServiceService,
    private spinner: NgxSpinnerService) { }
  nots: any;
  searchForm = new FormControl('');
  value = ''
  ngOnInit() {
    this.listNot('');
    setInterval(() => {
      this.listNot('invitations_update');
    }, 15000);
  }



  listNot(data) {
    this.spinner.show();

    this.appService.getNot(data).subscribe(
      (res) => {
        this.spinner.hide();
        this.nots = res['invites']

        this.nots.forEach(element => {
          element.invitesDisplay = element.invite.substr(0,50).concat('...')
          element.invite.toString()
        });
        console.log(this.nots, "<<<<<<<<<<<<<<<<<<<")

      }
    )
  }

}
