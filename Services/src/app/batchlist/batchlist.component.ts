import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit
{
  public Batches : any =[];
   
  constructor(public mobj : MarvellousService)
  {
    
  }
 
  ngOnInit()
  {
    this.Batches=this.mobj.GetBatchDetails();
  }
}

