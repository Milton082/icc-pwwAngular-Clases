import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-student-detail-page',
  imports: [RouterLink],
  templateUrl: './student-detail-page.html',
  styleUrl: './student-detail-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailPage {

  // ActivatedRoute permite leer los parámetros de la ruta
  // como /students/:id
  private route = inject(ActivatedRoute);

  // Lee el parámetro :id de la URL
  readonly id = this.route.snapshot.paramMap.get('id');

}
