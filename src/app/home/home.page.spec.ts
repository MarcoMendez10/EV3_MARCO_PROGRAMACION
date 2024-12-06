import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';  // Importa el componente
import { IonicModule } from '@ionic/angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      declarations: [HomePage],  // Declara el componente que se va a probar
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  it('should create the HomePage', () => {  // Bloque de prueba
    expect(component).toBeTruthy();  // Asegúrate de que el componente se crea correctamente
  });
});
