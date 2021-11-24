import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente()
  public titulo: string = "Crear cliente"

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activeRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void{
    //console.log("Clicked!")
    //console.log(this.cliente)

    this.clienteService.create(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con exito`, 'success')
    }
    )
  }

  update(): void{
    this.clienteService.update(this.cliente)
    .subscribe(cliente=>{
      this.router.navigate(['/clietes'])
      swal.fire('Cliente actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    })
  }
}
