# Project Instructions

## Commands
- `npm run build`
- `npm run lint`
- `npm run test`

## Architecture
- 코드베이스 구조와 주요 런타임 경계를 짧게 유지합니다.
- dcNess 문서 seed 를 쓰는 프로젝트는 docs/index.md 를 cold-start entrypoint 로 둡니다.

## Key Files
- `CLAUDE.md`: 모든 세션에 로드되는 프로젝트 지침입니다.
- AGENTS.md: 외부 에이전트용 얇은 안내가 필요할 때 CLAUDE.md 를 참조합니다.

## Code Style
- formatter, linter, naming convention 은 확인된 사실만 기록합니다.
- 모순되는 규칙은 남기지 말고 현재 코드와 일치하는 규칙만 유지합니다.

## Environment
- 필수 런타임, 패키지 매니저, 환경변수, 로컬 서비스만 기록합니다.
- 개인 환경값은 공유 파일 대신 로컬 설정에 둡니다.

## Testing
- 테스트 명령은 실패 시 재현 가능한 copy-paste 형태로 유지합니다.
- 회귀 검증에 필요한 fixture, seed data, 외부 서비스 조건을 기록합니다.

## Gotchas
- 반복 실수, 비직관적 설계 이유, 알려진 제한만 짧게 기록합니다.
- 일회성 문제나 추측은 넣지 않습니다.

## Workflow
- dcNess 시작: `/spec`, `/design`, `/impl`, `/acceptance` 중 작업 성격에 맞게 진입합니다.
- 다음 작업 확인은 `/next-work` 를 우선 사용합니다.

## dcNess Cold Start
- 다음 작업 후보 확인: `/next-work`
- 진행 상태 문서: docs/index.md 의 진행 상태 섹션을 사용합니다.
- live 상태 진본: GitHub issue open/closed 상태 + `in-progress` label
- 보드는 선택적 파생 뷰입니다. 필요할 때만 `/init-dcness` custom Project bootstrap 을 실행합니다.
