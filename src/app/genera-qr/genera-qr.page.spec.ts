import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneraQrPage } from './genera-qr.page';
import { QRCodeComponent } from 'angularx-qrcode'; // Importar el componente QRCodeComponent

describe('GeneraQrPage', () => {
  let component: GeneraQrPage;
  let fixture: ComponentFixture<GeneraQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), FormsModule, GeneraQrPage], // Importar el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P7 - Creación exitosa del componente', () => {
    expect(component).toBeTruthy();
  });
  
  it('P8 - Valor inicial de qrData del "Texto de base"', () => {
    expect(component.qrData).toBe('Texto de base');
  });
  
  
  it('P9- Generación del código QR al pulsar un botón', () => {
  });
  
  
  it('P10 - Verificar que el código QR no se muestra inicialmente', () => {
    const qrElement = fixture.debugElement.nativeElement.querySelector('angularx-qrcode');
    expect(qrElement).toBeNull();
  });
  
  it('P11 - Actualización de createdCode al llamar a generateQRCode()', () => {
    component.qrData = 'Nuevo texto'; // Cambiar el valor de qrData
    component.generateQRCode(); // Llamar a generateQRCode
    expect(component.createdCode).toBe('Nuevo texto'); // Verificar que createdCode se actualiza
  });
  
  
});
