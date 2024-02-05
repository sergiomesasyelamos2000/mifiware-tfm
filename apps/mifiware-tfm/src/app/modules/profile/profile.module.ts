import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './views/profile.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ProfileService } from './profile.service';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
        data: { breadcrumb: 'MENU.LOGIN' },
        canActivate: [AuthGuard],
      },
    ]),
  ],
  providers: [ProfileService],
})
export class ProfileModule {}
