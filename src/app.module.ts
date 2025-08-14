import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-mute-cake-a8m2ih89-pooler.eastus2.azure.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'npg_Mm6wRPV9ngls',
      database: 'neondb',
      ssl: {
        rejectUnauthorized: false, // Accept self-signed certificates (use with caution)
      },
      extra: {
        sslmode: 'require',
      },
      // other config...
    }),

    ProductsModule,

    CommonModule,
  ],
})
export class AppModule {}
