import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from 'src/pclub/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({transform: true}))
  
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  
  await app.listen(4000);
}
bootstrap();
