import pygame

khoa = naw

def main:
  pygame.init();
  pygame.display.set_caption("yeah")
  
  screen = pygame.display.set_mode((240, 180))
  running = True

  while running:
    for event in pygame.event.get():
      if event.type == pygame.QUIT:
        running = False

if __name__ == "__main__":
  main()
