import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  Patch,
  Post,
  // Res,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }) {
    return this.coffeesService.findOne(params.id);
  }

  @Post()
  create(@Body() body: { name: string; brand: string }) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body() body: { name: string; brand: string },
  ) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
