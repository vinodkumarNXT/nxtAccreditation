import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";

import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'ngx-lightbox';
import { NgxPrintModule } from 'ngx-print';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { MegaMenuModule } from 'primeng/megamenu';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog'; // Dynamic Dialog for runtime dialogs
import { InputTextModule } from 'primeng/inputtext';
// PrimeNG Modules
import { CalendarModule } from 'primeng/calendar'; // Calendar from PrimeNG
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';


import { TimelineModule } from 'primeng/timeline';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { PasswordModule } from 'primeng/password';
import { BadgeModule } from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { TabMenuModule } from 'primeng/tabmenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';  // Import TieredMenuModule


@NgModule({
  declarations: [],
  imports: [
  TieredMenuModule,
    TabMenuModule,
    FileUploadModule,
    ImageModule,
    InputNumberModule,
    BadgeModule,
    StepsModule,
    NgxMatTimepickerModule,
    NgxLoadingModule,
    NgxPrintModule,
    FlexLayoutModule,
    LightboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    MaterialModule,
    RouterModule,
    NgxSpinnerModule,
    DropdownModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    AutoCompleteModule,
    TooltipModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    DialogModule,
    DynamicDialogModule,
    CalendarModule,
    SidebarModule,
    AvatarModule,
    MenuModule,
    ChartModule,
    FieldsetModule,
    TimelineModule,
    PanelModule,
    BreadcrumbModule,
    PasswordModule,
    PanelMenuModule,

  ],
  exports: [
    TieredMenuModule,
    PanelMenuModule,
    TabMenuModule,
    FileUploadModule,
    ImageModule,
    InputNumberModule,
    BadgeModule,
    StepsModule,
    NgxMatTimepickerModule,
    NgxLoadingModule,
    NgxPrintModule,
    FlexLayoutModule,
    LightboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    MaterialModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule,
    DropdownModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    AutoCompleteModule,
    TooltipModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    DialogModule,
    DynamicDialogModule,
    CalendarModule,
    SidebarModule,
    AvatarModule,
    MenuModule,
    ChartModule,
    FieldsetModule,
    TimelineModule,
    PanelModule,
    BreadcrumbModule,
    PasswordModule
  ]

})
export class SharableModule { }
