import { Component } from '@angular/core';
import { cilLocationPin, cilPhone, cilAt } from '@coreui/icons';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {
  icons = { cilLocationPin,
            cilPhone,
            cilAt }
}
