import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string;

  @IsNotEmpty({ message: '缺少作者信息' })
  readonly author: string;

  readonly content: string;

  readonly cover_url: string;

  @IsNumber()
  readonly type: number;
}
