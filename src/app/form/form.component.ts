import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { AlertService } from '../services/alert/alert.service'
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, private registerService: RegisterService,  public alertService: AlertService) { } 
  
  public show_spinner: boolean = false;
  public data: any = null;
  public show: boolean = false;
  public allow_show_data: boolean = false;
  public haveSocialMedia: string = null;

  public challengeForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: [''],
    howKnow: [''],
    socialMedia: [''],
    whichSocialMedia: this.fb.group({
      facebook: [''],
      linkedIn: [''],
      instagram: ['']
    })

  });

  ngOnInit(){}

  onSubmit(){
    this.show_spinner = true;
    if( this.challengeForm.controls['socialMedia'].value == "false" || this.challengeForm.controls['socialMedia'].value == null ){
      let notSocialMedia;
      notSocialMedia = this.challengeForm.value;
      notSocialMedia = delete notSocialMedia.whichSocialMedia;
      console.log(notSocialMedia);
    }

    this.registerService.create(this.challengeForm.value).then((result) => {

    }, err => {
      this.data = this.challengeForm.value;
      this.challengeForm.reset();
      this.alertService.setAlert('Alerta', 'Formulário Enviado com Sucesso!', 'success');
      this.show = true;
      this.show_spinner = false;
    });

  }

  showData(){
    this.allow_show_data = true
  }

}
