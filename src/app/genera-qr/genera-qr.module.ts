import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneraQrPage } from './genera-qr.page';
import { IonicModule } from '@ionic/angular';

describe('GeneraQrPage', () => {
  let component: GeneraQrPage;
  let fixture: ComponentFixture<GeneraQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), GeneraQrPage], // Importa el componente standalone
    }).compileComponents();
    
    fixture = TestBed.createComponent(GeneraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('P7 - Creación exitosa del componente', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  it('P8 - Valor inicial de qrData', () => {
    expect(component.qrData).toBe('Texto de base'); // Verifica que el valor inicial de qrData sea el esperado
  });
});
