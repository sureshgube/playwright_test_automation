import { setWorldConstructor } from '@cucumber/cucumber';

class CustomWorld {
  public page: any;
}

setWorldConstructor(CustomWorld);
