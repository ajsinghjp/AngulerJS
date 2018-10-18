import { AwesomeModule } from './awesome.module';

describe('AwesomeModule', () => {
  let awesomeModule: AwesomeModule;

  beforeEach(() => {
    awesomeModule = new AwesomeModule();
  });

  it('should create an instance', () => {
    expect(awesomeModule).toBeTruthy();
  });
});
