import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';
import { messageError } from 'src/app/shared/classes/util';
import { LoadFileRhModel } from 'src/app/Models/load-file-rh-model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-rh-file-load',
  templateUrl: './rh-file-load.component.html',
  styleUrls: ['./rh-file-load.component.css']
})
export class RhFileLoadComponent implements OnInit {

   @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  inscricaoUpload!: Subscription;

  selectedFile: File | null = null;

  results: LoadFileRhModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private globalService:GlobalService,
    private uploadFileService:UploadFileService,
    private appSnackBar: AppSnackbar) {
       }

  ngOnInit(): void {}

  ngOnDestry(): void {
    this.inscricaoUpload?.unsubscribe();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      console.log(this.selectedFile.name);
    }
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('id_empresa',this.globalService.getIdEmpresa().toString());
      formData.append('id_usuario',this.globalService.getUsuario().id.toString());
      this.upLoad(formData);
    } else {
      this.appSnackBar.openFailureSnackBar(
        `Especifique um arquivo para upload`,
        'OK'
      );
    }
  }

  upLoad(par: FormData) {

        this.globalService.setSpin(true);

        this.inscricaoUpload = this.uploadFileService.UploadApontamentoRh(par)
          .subscribe(
          (data: LoadFileRhModel[]) => {
            this.globalService.setSpin(false);
            this.results = data;
          },
          (error: any) => {
            this.globalService.setSpin(false);
            this.results = [];
            this.appSnackBar.openFailureSnackBar(
              `Pesquisa Nos Apontamentos ${messageError(error)}`,
              'OK'
            );
          }
        );
      }


  onHome() {
    //this.router.navigate(['']);
  }
}
