import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardsRoutingModule } from './dashboard-routing.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardsRoutingModule],
})
export class DashboardModule {}
