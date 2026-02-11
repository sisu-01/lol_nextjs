import Image from "next/image";

interface CustomImageProps {
  text: string;
}

// prose: 기본 HTML 태그들에 스타일을 입혀주는 핵심 클래스 
// lg:prose-xl: 큰 화면에서는 글씨를 좀 더 크게
// prose-blue: 링크 등의 색상을 파란 계열로

const CustsomImage = ({ text }: CustomImageProps) => {
  const src = `/api/generate-image?title=${encodeURIComponent(text)}`;
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', margin: '40px 0px' }}>
      <Image
        src={src}
        alt={text}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        style={{ objectFit: 'cover', borderRadius: '8px' }}
      />
    </div>
  );
}

export default CustsomImage;