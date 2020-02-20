





# send window to desktop and follow focus
# shift + ctrl - right : yabai -m window --space next; yabai -m space --focus next
# shift + ctrl - left : yabai -m window --space prev; yabai -m space --focus prev
# shift + cmd - 2 : yabai -m window --space  2; yabai -m space --focus 2

# swap managed window
# shift + alt - h : yabai -m window --swap north

# move managed window
# shift + cmd - h : yabai -m window --warp east

# toggle window split type
ctrl - d : yabai -m window --toggle split

# float / unfloat window and center on screen
ctrl - f : yabai -m window --toggle float;

# float / unfloat window and center on screen
# ctrl - c : yabai -m window --toggle float;
         #yabai -m window --grid 4:4:0:0:2:2

, border and picture-in-picture
ctrl - s: yabai -m window --toggle sticky; yabai -m window --toggle topmost;
    #       yabai -m window --toggle pip





# toggle window border
ctrl - b : yabai -m window --toggle border

# balance size of windows
ctrl - 0 : yabai -m space --balance

ctrl - return : yabai -m window --toggle zoom-fullscreen
ctrl + alt - b : yabai -m space --layout bsp
ctrl + alt - s : yabai -m space --layout float


# create desktop and follow focus - uses jq for parsing json (brew install jq)
#ctrl + cmd - n : yabai -m space --create && \
#                  index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" #== 0))[-1].index')" && \
#                  yabai -m window --space "${index}" && \
                #  yabai -m space --focus "${index}"


# focus previous or next window in window tree (options: prev, next)
# ctrl + alt - r : yabai -m window --swap next

# focus previous or next window in window tree (options: prev, next)
# ctrl + cmd - r : yabai -m window --swap prev

# make floating window fill left-1/4 of screen
#ctrl + cmd - left : yabai -m window --grid 1:4:0:0:1:1

# make floating window fill left-2/4 of screen
#ctrl + cmd - up : yabai -m window --grid 1:4:0:1:1:1

# make floating window fill right-half of screen
#ctrl + cmd - down : yabai -m window --grid 1:4:0:2:1:1

# make floating window fill right-half of screen
#ctrl + cmd - right : yabai -m window --grid 1:4:0:3:1:1




# fast focus desktop
# cmd + alt - x : yabai -m space --focus recent
# cmd + alt - 1 : yabai -m space --focus 1


# focus monitor
# ctrl + alt - z  : yabai -m display --focus prev
# ctrl + alt - 3  : yabai -m display --focus 3

# send window to monitor and follow focus
# ctrl + cmd - c  : yabai -m window --display next; yabai -m display --focus next
# ctrl + cmd - 1  : yabai -m window --display 1; yabai -m display --focus 1

# move floating window
# shift + ctrl - a : yabai -m window --move rel:-20:0
# shift + ctrl - s : yabai -m window --move rel:0:20

# increase window size
# shift + alt - a : yabai -m window --resizew left:-20:0
# shift + alt - w : yabai -m window --resize top:0:-20

# decrease window size
# shift + cmd - s : yabai -m window --resize bottom:0:-20
# shift + cmd - w : yabai -m window --resize top:0:20

# set insertion point in focused container
# ctrl + alt - h : yabai -m window --insert west

# toggle window zoom
# alt - d : yabai -m window --toggle zoom-parent




# focus window
# alt - h : yabai -m window --focus west
 
 