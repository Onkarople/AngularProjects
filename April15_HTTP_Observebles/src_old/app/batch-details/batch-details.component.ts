import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit
{

  public batches : any=[];

  constructor(public obj : MarvellousService) {}

  ngOnInit()
  {
    return this.obj.GetBatchDetails().subscribe(data=>this.batches=data);
  }


}
