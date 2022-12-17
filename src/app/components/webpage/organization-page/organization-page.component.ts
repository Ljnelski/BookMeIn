import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Organization } from 'src/app/models/organization';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {

  organizationData = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Address: new FormControl(null),
      Phone: new FormControl(null),
      Email: new FormControl(null),
  });

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.organizationData.patchValue({
      Name: this.authService.organization?.name,
      Address: this.authService.organization?.address,
      Phone: this.authService.organization?.phone,
      Email: this.authService.organization?.email
    })
    this.organizationData.markAllAsTouched()
  }

  createOrganization() {
    if(this.organizationData.valid)
      this.authService.createOrganization(this.organizationData.value)
  }

  updateOrganization() {
    if(this.organizationData.valid)
    this.authService.updateOrganization(this.organizationData.value)
  }
}
