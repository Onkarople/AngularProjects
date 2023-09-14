import { Component,OnInit} from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchdeatils',
  templateUrl: './batchdeatils.component.html',
  styleUrls: ['./batchdeatils.component.css']
})
export class BatchdeatilsComponent implements OnInit
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
