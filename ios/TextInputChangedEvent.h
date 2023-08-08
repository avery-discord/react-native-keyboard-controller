//
//  TextInputChangedEvent.h
//  KeyboardController
//
//  Created by Kiryl Ziusko on 05/06/2023.
//  Copyright © 2023 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventDispatcherProtocol.h>

@interface TextInputChangedEvent : NSObject <RCTEvent>

- (instancetype)initWithReactTag:(NSNumber *)reactTag
                        previous:(NSNumber *)previous
                         current:(NSNumber *)current;

@end
