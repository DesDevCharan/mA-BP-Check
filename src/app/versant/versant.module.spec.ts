import { VersantModule } from './versant.module';

describe('VersantModule', () => {
  let versantModule: VersantModule;

  beforeEach(() => {
    versantModule = new VersantModule();
  });

  it('should create an instance', () => {
    expect(versantModule).toBeTruthy();
  });
});
