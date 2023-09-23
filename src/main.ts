import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    const configService = app.get(ConfigService);
    const port = configService.get('port')
    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle("Monito")
        .setDescription("This api for 'Monito' shop on React")
        .setVersion("1.0")
        .addTag('API')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document)

    await app.listen(port);
}

bootstrap();
