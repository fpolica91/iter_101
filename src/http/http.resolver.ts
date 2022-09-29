import { Resolver, Query } from '@nestjs/graphql';
import { HttpService } from './http.service';

@Resolver()
export class HttpResolver {
  constructor(private readonly httpService: HttpService) {}
  @Query(() => String)
  public hello() {
    return 'Hello World!';
  }
}
