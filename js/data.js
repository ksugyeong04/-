const qnaList = [
  {
    q: '1. 친구와 산책 하고 있던 당신! 걷다가 친구가 옆에서 넘어진다면?',
    a: [
      { answer: 'a. ㅋㅋㅋㅋ뭐하냐? ㅋㅋㅋㅋ 찰칵! (사진을 찍는다.)', type: [2,3,6] },
      { answer: 'b. 엇.... 그냥 지나가야겠다.', type: [1,8,9] },
      { answer: 'c. 어? 너 괜찮아..??', type: [0,4,5,7,10,11] },
    ]
  },
  {
    q: '2. 점심을 뭐먹을지 고민중인 당신! 당신의 맛집 선정 기준은? ',
    a: [
      { answer: 'a. 무조건 구글 평점 5점', type: [1,4,6,8,9] },
      { answer: 'b. 아 여기 분위기 뒤집어지는데? 직감파', type: [2,3,5,10] },
      { answer: 'c. 친구가 가자는 곳 가는편...', type: [0,7,11] },
    ]
  },
  {
    q: '3. 날씨가 좋아 친구와 하늘을 올려다 봤는데...!',
    a: [
      { answer: 'a. 저구름은 하트 모양.. 저 구름은 고래모양..', type: [1,2,3,5,7,10] },
      { answer: 'b. 이따 뭐먹지?', type: [6,9,11] },
      { answer: 'c. 쟤는 언제까지 구름을 보는거지?', type: [0,4,8] }
    ]
  },
  {
    q: '4. 내일이 여행이네? 언제 짐을 싸지? ',
    a: [
      { answer: 'a. 내일이면 아직 여유있네~!! 일어나서 준비해야지! ', type: [2,3,7] },
      { answer: 'b. 헉 벌써 내일!? 빨리 지금 싸야겠다. ', type: [1,4,5,8,9,10,11] },
      { answer: 'c. 자기 한 시간 전에 싸야겠다!', type: [0,6] },
    ]
  },
  {
    q: '5. 야외 일정중 갑작스러운 비소식 당신의 선택은?',
    a: [
      { answer: 'a. 이왕 온거 가야지!!', type: [2,3,6,8] },
      { answer: 'b. 하... 귀찮다. 숙소에서 막걸리나 까자!!', type: [0,7]},
      { answer: 'c. 실내 활동으로 바꿔볼까?', type: [1,4,5,9,10,11] },
    ]
  },

  {
    q: '6. 비행기에 탄 당신! 갑자기 비행기가 흔들리는데...! ',
    a: [
      { answer: 'a. 어?! 비행기 추락하는 거 아냐? 추락하면 산소마스크 착용하고 낙하산…', type: [2,5,7,10] },
      { answer: 'b. 뭐 별거 아니겠지~! 대수롭지 않게 넘긴다.', type: [3,4,9,11] },
      { answer: 'c. 무섭지만 괜찮은척 한다.', type: [0,1,6,8] },
    ]
  },
  {
    q: '7. 두 명 전용 타는 놀이 기구 줄을 친구들 세 명이서 기다리고 있는데 모르는 사람 세명이 와서 놀이 기구 같이 타자고 한다. 이때 당신은? ',
    a: [
      { answer: 'a. (아 그건좀...)ㅎㅎ 죄송합니다.', type: [1,3,7,9] },
      { answer: 'b. 어? 너무 좋아요! ㅎㅎㅎ', type: [2,4,5,8] },
      { answer: 'c. 어... 너네 맘대로 해. 나는 상관없어...!', type: [0,6,10,11] },
    ]
  },
  {
    q: '8. 끝내주는 일정 후 지쳐 숙소로 돌아온 친구와 나 그 후 일정은?',
    a: [
      { answer: 'a. 침대 속에서 아늑하게 혼자만의 시간을 갖는다.', type: [0,1,7,11] },
      { answer: 'b. 이대로 잘 수 없지!! 친구와 신나게 파자마 파티를 연다.', type: [2,4,6,8] },
      { answer: 'c. 친구와 도란 도란 맥주 한캔 하고 잔다.', type: [3,5,9,10] },
    ]
  },
  {
    q: '9. 길가다가 무거운 짐을 들고 있는 어르신을 봤다. 이때 당신의 행동은?',
    a: [
      { answer: 'a. 도와드릴까요? 하며 먼저 물어본다.', type: [2,4,5,10] },
      { answer: 'b. 그냥 지나가다가 도와달라 하시면 그때 도와드린다. ', type: [1,3,7,9,11] },
      { answer: 'c. 신경도 안 쓰고 지나간다.', type: [0,6,8] },
    ]
  },
  {
    q: '10. 점심메뉴 선정 도중 친구와 의견이 안맞는 당신! 이럴때는? ',
    a: [
      { answer: 'a. 그래! 네가 먹고 싶은 거 먹자.', type: [0,1,6,10] },
      { answer: 'b. 나 이거 먹으려고 여기 온건데.. 여기 만두피가 진짜 쫀득쫄깃… 하며 설득한다.', type: [2,3,8] },
      { answer: 'c. 그럼 공평하게 사다리 타기 게임 하자!', type: [4,5,7,9,11] },
    ]
  },
  {
    q: '11. 수경이의 생일이다. 무슨 선물을 줄까?',
    a: [
      { answer: 'a. 어? 이거 수경이가 필요하다고 했는데! 이거 사줘야겠다.', type: [0,1,8,9] },
      { answer: 'b. 이거 완전 귀엽다. 이거 사줘야지~!', type: [2,4,5,7,10] },
      { answer: 'c. 잘 모르겠으니깐 치킨 기프티콘 보내줘야겠다..!', type: [3,6,11] },
    ]
  },
  {
    q: '12. 즐거웠던 여행 후 집으로 돌아온 당신',
    a: [
      { answer: 'a. 좀만 쉬었다가 짐정리 해야지..', type: [0,1,5,7,9] },
      { answer: 'b. 오자마자 바아로 짐정리 하는 나는야 깔끔쟁이', type: [4,8,10,11] },
      { answer: 'c. 냅두면 언젠가 엄마가 짐 정리해주겠지~,', type: [2,3,6] },
    ]
  }
]

const infoList = [
  {
    name: '나에게 있어서 여행이란 ‘탐험’이다 <츄베릅 버터 프레첼맛 쿠키!>',
    desc: '즉흥적이고 모험적인 여행을 선호하는 당신! 자연속에서 편안함을 느끼며 캠핑, 하이킹, 낚시 등을 통해 자연과 교감하며 자유롭고 독립적인 여행을 하는 타입입니다.<p><strong>여행지 추천 1 - 프랑스 파리</strong></p> <p>루브르 박물관 (세계 최대의 미술 박물관으로, 모나리자와 비너스 드 밀로 등 유명한 작품을 소장)</p> <p><strong>여행지 추천 2 - 일본 오사카</strong></p> <p>온천, 아리마 온천 다이코노유</p> <p><strong>맛집 추천 1 - Le Fumoir</strong></p> <p>특징: 루브르 박물관과 루브르-투일리리 가든 근처에 위치한 아늑한 레스토랑. 클래식하고 모던한 프랑스 요리를 제공</p> <p>주요 메뉴: 스테이크 타르타르, 푸아 그라, 소고기 등</p> <p>주소: 6 Rue de l Amiral de Coligny, 75001 Paris, France</p> <p><strong>맛집 추천 2 - 다케나카 정육점</strong></p> <p>메뉴 추천: 소고기 고로케</p> <p><strong>카페 추천 - Café Kitsuné Palais Royal</strong></p> <p>특징: 편안하고 현대적인 분위기의 카페로, 퀄리티 높은 커피와 디저트를 제공</p> <p>위치: 51 Galerie de Montpensier, 75001 Paris, France (루브르 근처).</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘탐구’이다 <시원한 바다 요정맛 쿠키!>',
    desc: '효율적이고 목적 지향적인 여행을 선호하는 당신! 도전과 성장을 추구하는 경향이 있어, 여행을 통해 새로운 경험과 도전을 찾으며, 자기 자신의 역량을 향상시키는 타입입니다. <p><strong>여행지 추천 - 독일 베를린</strong></p> <p>브란덴부르크 문 (베를린의 상징적인 유산으로, 18세기에 프리드리히 왕이 지은 고전적인 건축물)</p> <p><strong>맛집 추천 - Renger-Patzsch</strong></p> <p>특징: 고급스러운 분위기와 뛰어난 서비스로 유명한 레스토랑입니다. 현지인과 관광객 모두가 찾는 인기 있는 장소</p> <p>주소: Savignyplatz 7, 10623 Berlin, 독일</p> <p><strong>카페 추천 - Café Wintergarten im Literaturhaus Berlin</strong></p> <p>특징: 문학관 내에 위치한 아름다운 유리창 공간의 카페로, 훌륭한 커피와 간단한 요리를 제공합니다. 문화적인 분위기를 느낄 수 있는 곳</p> <p>위치: Fasanenstraße 23, 10719 Berlin, 독일</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘파티’이다 <나락도 락이다 락스타맛 쿠키!>',
    desc: '<p>다채롭고 창의적인 여행을 선호하는 당신! 일정에 구애받지 않고 자유롭게 현지의 색다른 체험을 하는 여행을 선호하는 타입입니다.</p> <p><strong>여행지 추천 - 미국/뉴욕</strong></p> <p>레고랜드 레고모양 놀이기구를 타며 즐거움 만끽가능!</p> <p><strong>맛집 추천 - BILLS BAR AND BURGER</strong></p> <p>다운타운과 가까이 위치해 있으며 미국 정토 수제버거 느낌을 즐길 수 있다! 메뉴는 클래식 버거와 엄청난 양의 몬스터 쉐이크 추천</p> <p><strong>카페 추천 - 커피 프로젝트</strong></p> <p>뉴욕에서는 커피에 진심인 사장님과 각 커마다의 자체적 로스팅이 특징 메뉴는 커피와 크로플 추천</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘도전’이다<요기 어때 나는 어때? 보드맛 쿠키!>',
    desc: '혁신적인 명소를 방문하여 새로운 아이디어를 발견하고 지적 호기심을 충족하는 여행을 선호하는 당신! 느긋하고 관대하며 위기상황에서 판단을 잘하며 선입견 없이 여행을 즐기는 타입입니다.<p><strong>여행지 추천 - 미국 나이아가라 폴스</strong></p> <p>Cave of the Winds (바람의 동굴)</p> <p>입장료: 14달러</p> <p><strong>맛집 추천 - 엔초르바</strong></p> <p>치즈피자, 버팔로윙</p> <p>특징: 내부가 깔끔하며 넓고 현지의 맛을 즐길 수 있음</p> <p><strong>카페 추천 - FIKA 카페</strong></p> <p>특징: 북유럽 감성 뿜뿜! 시그니처 메뉴인 피카 아이스라떼 추천</p> '
  },
  {
    name: '나에게 있어서 여행이란 ‘사랑’이다 <통통 튀는 체리 맛 쿠키!>',
    desc: '안전하고 익숙한 환경에서의 여행을 선호하는 당신! 동행자와의 추억을 쌓아가며 더욱 돈독한 관계를 생성하는 것을 중요시하는 타입입니다.<p><strong>여행지 추천 - 크로아티아 스플리트</strong></p> <p>마르얀 공원 (동행자와 함께 이야기하며 걸으며 스플리트의 뷰를 즐길 수 있음)</p> <p><strong>맛집 추천 - Konoba Fetivi</strong></p> <p>특징: 현대적이지 않은 투박한 인테리어의 해산물 전문 레스토랑</p> <p>메뉴: 상어구이, 도미구이 등 생선구이 (포크와 나이프만으로도 생선을 발라먹을 수 있을 만큼 부드러움)</p> <p><strong>카페 추천 - 07 레스토랑</strong></p> <p>특징: 야자수가 있어 제주도와 비슷한 느낌이면서도 유럽의 분위기를 느낄 수 있음</p> <p>메뉴: 커피 외에도 칵테일 등 간단한 술</p> '
  },
  {
    name: '나에게 있어서 여행이란 ‘만남의 광장’이다 <달콤 상큼 복숭아맛 쿠키!>',
    desc: '사람과의 교류를 중요시하는 여행을 선호하는 당신! 현지인들과의 교류를 통해 깊은 인상을 받으며 이러한 활동을 통해 삶의 의미를 찾고 새로운 영감을 얻는 타입입니다. <p><strong>여행지 추천 - 쿠스코 아르마스 광장</strong></p> <p>특징: 배꼽이란 뜻을 가진 쿠스코 르네상스 시대 건축양식의 대표적인 건축물들로 둘러싸인 대표적인 콜로니얼 형태의 광장이다</p> <p><strong>맛집 추천 - Green Falafel</strong></p> <p>Piadina Mega (15sol)</p> <p>특징: 신선한 재료에 가성비 좋은 곳</p> <p><strong>카페 추천 - 스타벅스</strong></p> <p>초코루꾸마 프라푸치노 (17.5sol)</p> <p>특징: 쿠스코 아르마스 광장을 카페 안에서 한눈에 볼 수 있다</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘도파민’이다 <톡쏘는 매력의 라임맛 쿠키!>',
    desc: '활동적이고 흥미진진한 여행을 선호하는 당신!익스트림 스포츠를 통해 스릴을 즐기고 에너지를 발산하는 것을 좋아하는 타입입니다.<p><strong>여행지 추천 - 뉴질랜드 퀸스타운</strong></p> <p>퀸스타운은 세계의 모험 수도로 불릴 만큼 다양한 익스트림 스포츠를 즐길 수 있는 곳. 번지점프, 스카이다이빙, 제트보트, 래프팅 등 여러 활동을 경험할 수 있음.</p><p><strong>맛집 추천 - Rata</strong></p> <p>특징: 뉴질랜드 출신의 유명 셰프 Josh Emett가 운영하는 레스토랑으로, 현대 뉴질랜드 요리를 선보입니다. 현지 재료를 사용한 창의적인 요리를 맛볼 수 있음.</p> <p>주소: 43 Ballarat Street, Queenstown</p> <p><strong>카페 추천 - Vudu Café & Larder</strong></p> <p>특징: 퀸스타운에서 인기 있는 카페로, 맛있는 브런치와 커피를 즐길 수 있으며, 건강하고 신선한 음식으로 유명함.</p> <p>주소: 16 Rees Street, Queenstown</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘감성’이다. <감성 폭팔 눈설탕맛 쿠키!>',
    desc: '아름다운 풍경속에서 감성적인 만족을 느끼는 여행을 선호하는 당신! 여행을 통해 자신을 더 잘 이해하고 내면의 성장을 중요시하는 타입입니다.<p><strong>여행지 추천 - 네덜란드 위트레흐트</strong></p> <p>돔 타워 (도시의 상징적인 타워에 올라 도시의 아름다운 전경을 감상 가능)</p> <p><strong>맛집 추천 - De Zakkendrager</strong></p> <p>특징: 역사적인 건물 안에 위치한 레스토랑으로, 전통적인 네덜란드 요리와 현대적인 요리를 제공</p> <p>메뉴 추천: 스테이크와 신선한 해산물 요리가 유명</p> <p>분위기: 고풍스러운 분위기 속에서 여유로운 식사를 즐길 수 있음</p> <p><strong>카페 추천 - Blackbird Coffee & Vintage</strong></p> <p>특징: 빈티지한 인테리어와 함께 훌륭한 커피를 제공하는 카페</p> <p>메뉴: 신선한 커피, 홈메이드 케이크, 샌드위치</p> <p>주소: Oudegracht aan de Werf 222, 3511 NS Utrecht</p>'
  },
  {
    name: '여행 나에게 있어서 여행이란 ‘체크리스트’이다 <선비맛 쿠키..>',
    desc: '계획적이고 조직적인 여행을 선호하는 당신! 역사적 명소를 탐방하며 얻는 지식과 경험을 통해 큰 만족감을 얻는 타입입니다.p><strong>여행지 추천 - 일본 도쿄</strong></p> <p>센소지 (도쿄에서 가장 오래된 절)</p> <p><strong>맛집 추천 - 이치란 라멘</strong></p> <p>특징: 진하고 부드러운 돈코츠 라멘. 일본에서 가장 유명한 체인점 중 하나</p> <p>메뉴: 이치란 라멘 (단일 메뉴 + 사이드로 구성)</p> <p>분위기: 독서실 느낌의 작은 테이블. 1인 식사</p> <p><strong>카페 추천 - 카페 데이엔</strong></p> <p>특징: 도쿄 정원 박물관 안에 위치함</p> <p>메뉴: 다양한 커피 외에도 샌드위치, 브런치 등</p>'
  },
  {
    name: '나에게 있어서 여행이란 ‘효율’이다 <한치의 오차도 없는 연금술사맛 쿠키!>',
    desc: '여행일정을 미리 세우고 철저하게 따르는 것을 선호하는 당신!예기치 않은 상황을 최소화하고 시간을 효율적으로 활용하며 여행하는 타입입니다.'
  },
  {
    name: '나에게 있어서 여행이란 ‘침대’이다 <풉...! 풋사과맛 쿠키>',
    desc: '여행을 통해 내면의 성찰과 영감을 얻으며 의미 있는 여행을 선호하는 당신! 역사적인 건축물을 탐방하며 과거의 문화를 체험하는 것을 좋아하는 타입입니다.<p><strong>여행지 추천 - 이탈리아 베네치아</strong></p> <p>산 마르코 광장 (베네치아의 중심부에 위치한 광장으로, 많은 역사적 건축물이 모여 있음)</p> <p><strong>맛집 추천 - Antiche Carampane</strong></p> <p>특징: 현지인과 관광객 모두에게 인기 있는 전통 베네치아 요리 전문 레스토랑</p> <p>주요 메뉴: 스파게티 알라 보라니세(오징어 먹물 파스타), 해산물 전채, 티라미수</p> <p>주소: San Polo, 1911, 30125 Venezia VE, Italy</p> <p><strong>카페 추천 - Caffè Florian</strong></p> <p>특징: 산 마르코 광장에 위치한 유서 깊은 카페로, 고급 디저트와 커피를 즐길 수 있음</p> <p>주요 메뉴: 다양한 커피, 페이스트리, 전통 베네치아 디저트</p><p>주소: Piazza San Marco, 57, 30124 Venezia VE, Italy</p> '
  },
  {
    name: '나에게 있어서 여행이란 ‘추억’이다<고소한 피스타치오맛 쿠키!>',
    desc: '가족이나 가까운 친구들과 함께하는 편안한 여행을 선호하는 당신! 안전하고 익숙한 환경에서의 여행을 즐기며, 추억을 중요시하는 타입입니다. '
  },
]
